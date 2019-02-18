import rustFile from './App.rs';

export function loadWasm(handleResultObjectPromise) {
    switch (process.env.NODE_ENV) {
      case 'production':
        fetch('app.wasm')
          .then(response => response.arrayBuffer())
          .then(bytes => WebAssembly.instantiate(bytes, {}))
          .then(handleResultObjectPromise);
        break;
      case 'development':
        rustFile().then(handleResultObjectPromise);
        break;
      default:
        break;
    }
}