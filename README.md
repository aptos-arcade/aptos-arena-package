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

```tsx
import React from 'react';

import {useWallet} from "@aptos-labs/wallet-adapter-react";

import { Game } from "aptos-arena-package-v1";

const TestGame = () => {

    const { account, signAndSubmitTransaction } = useWallet();

    const setConnectModalOpen = async (isOpen: boolean) => {
        console.log(isOpen);
    }
    
    return (
        <Game
            signAndSubmitTransaction={signAndSubmitTransaction}
            setConnectModalOpen={setConnectModalOpen}
            accountAddress={account?.address?.toString()}
        />
    );
};

export default AptosArena;
```

### Hook
    
```tsx
import React from 'react';

import {useWallet} from "@aptos-labs/wallet-adapter-react";

import {Unity} from "react-unity-webgl";

import {useGame} from "aptos-arena-package-v1";


const TestGameWithHook = () => {

    const { account, signAndSubmitTransaction } = useWallet();

    const setConnectModalOpen = async (isOpen: boolean) => {
        console.log(isOpen);
    }

    const {
        unityProvider,
        isLoaded,
        unload,
        requestFullscreen,
        sendMessage,
        addEventListener,
        removeEventListener
    } = useGame({
        accountAddress: account?.address?.toString(),
        signAndSubmitTransaction,
        setConnectModalOpen,
    });

    return (
        <Unity
            unityProvider={unityProvider}
            style={{
                width: '100%',
                aspectRatio: '16/9'
            }}
        />
    );
};

export default TestGameWithHook;
```

## Types

### GameProps


```ts
interface GameProps {
    signAndSubmitTransaction: SignAndSubmitTransaction,
    setConnectModalOpen: SetConnectModalOpen,
    accountAddress?: string
}
```

### SignAndSubmitTransaction

``` ts
type SignAndSubmitTransaction = (payload: TransactionPayload_EntryFunctionPayload) => Promise<{ hash: string }>;
```

### SetConnectModalOpen

``` ts
type SetConnectModalOpen = (isOpen: boolean) => void
```


