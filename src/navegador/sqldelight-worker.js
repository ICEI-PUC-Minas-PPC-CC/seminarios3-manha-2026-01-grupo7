// sqldelight-worker.js - Protocolo Oficial SQLDelight 2.x
importScripts('https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.js');

let db = null;
let SQL = null;

async function initSQL() {
    if (!SQL) {
        SQL = await initSqlJs({
            locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`
        });
    }
}

self.onmessage = async function (ev) {
    const data = ev.data;
    await initSQL();

    // 1. Carregamento do arquivo .db
    if (data instanceof ArrayBuffer || (data && data.buffer instanceof ArrayBuffer)) {
        const buffer = data instanceof ArrayBuffer ? data : data.buffer;
        try {
            if (db) db.close();
            db = new SQL.Database(new Uint8Array(buffer));
            console.log("Worker: Banco carregado com sucesso.");
        } catch (e) {
            console.error("Worker: Erro ao carregar buffer:", e);
        }
        return;
    }

    // 2. Execução de Queries
    if (data.action === 'exec') {
        try {
            if (!db) db = new SQL.Database();
            
            const stmt = db.prepare(data.sql);
            if (data.params) stmt.bind(data.params);

            const rows = [];
            while (stmt.step()) {
                rows.push(stmt.get());
            }
            stmt.free();

            // O SQLDelight 2.x espera EXATAMENTE este formato:
            // results: { values: [ [col1, col2], [col1, col2] ] }
            self.postMessage({
                id: data.id,
                results: {
                    values: rows
                }
            });
        } catch (e) {
            console.error("Worker SQL Error:", e.message);
            self.postMessage({
                id: data.id,
                error: e.message,
                results: { values: [] }
            });
        }
    } else if (data.action === 'export') {
        const buffer = db ? db.export() : new Uint8Array(0);
        self.postMessage({
            id: data.id,
            results: { values: buffer }
        }, [buffer.buffer]);
    }
};
