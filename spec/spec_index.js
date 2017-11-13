let specs = require.context(".", true, /_spec$/);
specs.keys().forEach(specs);
