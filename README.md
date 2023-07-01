# Aptos Arena Package

This package facilitates the display of the Aptos Arena game in any React app.

## Usage

### Installation

```bash
npm install aptos-arena-package-v1 --save
```

or

```bash
yarn add aptos-arena-package-v1
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
    
    const connect = (walletName: string) => {
        // ...
    }

    const accountAddress = '0x1234567890'

    return (
        <Game
            signAndSubmitTransaction={signAndSubmitTransaction}
            signTransaction={signTransaction}
            connect={connect}
            accountAddress={accountAddress}
        />
    );
};

export default AptosArena;
```

### Props

- `signAndSubmitTransaction` - `(TransactionPayload_EntryFunctionPayload) => Promise<{hash: string}>`
- `signTransaction` - `(TransactionPayload_EntryFunctionPayload) => Promise<string>`
- `connect` - `(walletName: string) => void`
- `accountAddress` - `string`