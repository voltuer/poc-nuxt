// This is a H3 server route handler. It runs ONLY on the server.

export default defineEventHandler((event) => {
    // --- THIS IS THE KEY LINE ---
    console.log('---------------------------------');
    console.log('hello');
    console.log('Button clicked and server logic executed!');
    console.log('---------------------------------');
    // ----------------------------

    // Return a response to the client
    return {
        success: true,
        message: 'Server successfully logged "hello". Check your terminal!',
        timestamp: new Date().toISOString()
    };
});
