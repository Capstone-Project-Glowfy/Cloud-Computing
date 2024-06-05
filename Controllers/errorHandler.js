const handleServerError = async (h, error) => {
    console.error(error);
    return h.response({
        status: 'error',
        message: 'Terjadi kesalahan pada server',
        error: error.message,
    }).code(500);
}

const handleDatabaseError = async (h, error) => {
    console.error(error);
    if (error.code === 'ER_DUP_ENTRY') {
        return h.response({
            status: 'error',
            message: 'User already exists' 
        }).code(400);
    }
    if (error.code === 'ER_ACCESS_DENIED_ERROR' || error.code === 'ER_BAD_DB_ERROR') {
        return h.response({
            status: 'error',
            message: 'Database connection error' 
        }).code(500);
    }

    await handleServerError;
}

const handleScanError = async (error) => {
    console.error(error);
    return {
        status: 'error',
        message: 'Terjadi kesalahan ketika Scanning',
        error: error.message,
    };
}

module.exports = {handleServerError,handleDatabaseError,handleScanError}