# Issue a credential

In this tutorial we will issue a credential from the _Issuer_ to a _Holder_. We will start with setting up both their agents with the minimal configuration required to follow this tutorial. It is assumed that there is a connection between the _Issuer_ and the _Holder_ and the _Issuer_ also has a registered schema and credential definition. After initializing the _Issuer_ will send a credential to the _holder_, and will then accept this credential and automatically store it in their wallet.

_Using [AnonCreds](https://anoncreds-wg.github.io/anoncreds-spec/) and the [Issue Credential V2 Protocol](https://github.com/hyperledger/aries-rfcs/blob/main/features/0453-issue-credential-v2/README.md) or the [Issue Credential V1 Protocol](https://github.com/hyperledger/aries-rfcs/blob/main/features/0036-issue-credential/README.md)._

:::info

This section assumes that

1. You have [set-up your develoment environment](../getting-started).
1. You have basic knowledge of the required fields in the [Agent Config](./agent-config)
1. You have completed the [Create a Connection tutorial](./create-a-connection)
1. You have a registered schema and credential definition. This can be done by following the [Registering on a AnonCreds Registry](./registering-schema-and-credential-definition)

:::

### 1. Setting up the agents

First for both agents we must setup and initialize an agent to work with. Depending on your target, [React Native](../getting-started/installation/react-native) or [Node.js](../getting-started/installation/react-native), it might vary.

In this tutorial the _Holder_ will be in a [Node.js environment](../getting-started/installation/nodejs) and the _Issuer_ also in a [Node.js environment](../getting-started/installation/nodejs).

#### Issuer

For the _Issuer_ the setup is commonly not the same as the _Holder_. In the example they both live in a server environment, meaning they do not need a mediator. More commonly, the _Holder_ is in a mobile environment where a mediator is required for receiving DIDComm messages.

It is also very important for the _Issuer_ to have a public DID, for the binding with a credential definition, amongst other things. For this demo we will use [BCovrin Test](http://test.bcovrin.vonx.io). If you want to follow this tutorial, you have to register a public DID [here](http://test.bcovrin.vonx.io) via the Wallet seed field (this must be the same as the seed inside the config under the key [`publicDidSeed`](./agent-config#publicdidseed)).

In order to reach the _Issuer_ we have to add a list of [`endpoints`](./agent-config#endpoints) of the agent that exposes the `inboundTransport` to the public. In the example below we add an `inboundTransport` and use port `3000`. For development purposes it is recommended to use a tunneling service for this, like [Ngrok](https://ngrok.com). Ngrok will allow you to reach your locally exposed endpoint from the public. If a tunneling service is used, make sure to use the `HTTPS` variant as mobile environments, by default, do not accept `HTTP` anymore.

To install [Ngrok](https://ngrok.com) and expose the port to the public the following commands can be used:

<!-- tabs -->

# yarn

```console
yarn global add ngrok

ngrok http <PORT>
```

# npm

```console
npm install --global ngrok

ngrok http <PORT>
```

<!-- /tabs -->

:::issuer

```typescript showLineNumbers issue-a-credential.ts section-1

```

:::

#### Holder

For the _Holder_ we need to setup a basic agent with a wallet, mediator, outbound transport and a ledger.

> If you want to follow this tutorial in a mobile environment:
>
> 1. Use the `agentDependencies` from `@aries-framework/react-native`
> 1. It is very important to note that mobile agents do not support HTTP by default. It is recommended to do everything over HTTPS, but for development HTTP can be enabled for [iOS](https://stackoverflow.com/questions/30731785/how-do-i-load-an-http-url-with-app-transport-security-enabled-in-ios-9) and [Android](https://stackoverflow.com/questions/51902629/how-to-allow-all-network-connection-types-http-and-https-in-android-9-pie).

:::holder

```typescript showLineNumbers issue-a-credential.ts section-2

```

:::

### 3. Listening for incoming credentials

When we want to accept a credential, we have to listen to incoming credentials and handle accordingly. In this example we do not have any user interaction, but is likely that your application would have a user-interface which would display the credential. When receiving a credential offer you can get the values from `credentialExchangeRecord.credentialAttributes`.

:::holder

```typescript showLineNumbers issue-a-credential.ts section-3

```

:::

### 4. Issuing a credential

Now that everything is setup on both sides, the _Issuer_ can now offer a credential to the _Holder_.

> In this example we do not instantiate a connection and assume that there is one. Please refer to this guide [Create a connection](./create-a-connection) to get a connection and connectionId.

<!-- tabs -->

# Indy

:::issuer

```typescript showLineNumbers issue-a-credential.ts section-4

```

:::

# AnonCreds

:::issuer

```typescript showLineNumbers issue-a-credential.ts section-5

```

:::

<!-- /tabs -->

### Useful resources

- [AnonCreds](https://anoncreds-wg.github.io/anoncreds-spec/)
- [Issue Credential V1 Protocol](https://github.com/hyperledger/aries-rfcs/blob/main/features/0036-issue-credential/README.md)
- [Issue Credential V2 Protocol](https://github.com/hyperledger/aries-rfcs/blob/main/features/0453-issue-credential-v2/README.md)
