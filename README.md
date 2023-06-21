# Aptos Arcade Package README

# Aptos Arena Package

This package facilitates the display of the Aptos Arena game in any React app.

## Usage

### Installation

```bash
npm install @jasonhedman/aptos-arena-package --save
```

or

```rust
yarn add @jasonhedman/aptos-arena-package --save
```

### Component

```jsx
import React from 'react';

import { TransactionPayload_EntryFunctionPayload } from "aptos/src/generated";

import { Game } from "@jasonhedman/aptos-arena-package";

const AptosArena = () => {

    const signAndSubmitTransaction = async (transaction: TransactionPayload_EntryFunctionPayload) => {
        // ...
        return {
            hash: '0x1234567890'
        }
    }

    const signTransaction = async (transaction: TransactionPayload_EntryFunctionPayload) => {
        // ...
        return Uint8Array.from([])
    }

    const accountAddress = '0x1234567890'

    return (
        <Game
            signAndSubmitTransaction={signAndSubmitTransaction}
            signTransaction={signTransaction}
            accountAddress={accountAddress}
        />
    );
};

export default AptosArena;
```

### Props

- `signAndSubmitTransaction` - `(TransactionPayload_EntryFunctionPayload) => Promise<{hash: string}>`
- `signTransaction` - `(TransactionPayload_EntryFunctionPayload) => Promise<string>`
- `accountAddress` - `string`