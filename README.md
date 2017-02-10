# Castle

<img src="https://cdn.rawgit.com/siliconmagi/pictures/master/proto-min.svg" alt="webpack 2 silicon magi banner" align="center" width="40%" />
<br />

## Solaris Web App Project Foundation 
A Full Stack Web Application foundation using: Inferno JS, Mobx, Typescript, Styled-Components, AWS Cognito and Webpack 2

To download code:

```bash
$ git clone https://github.com/siliconmagi/castle 
```

To install dependencies:

```bash
$ cd castle
$ yarn 
```

Setup Config file:
Input your values from [amazon cognito console](https://console.aws.amazon.com/cognito)

```bash
$ cd ./src 
$ touch config.ts 
export default {
  region: '',
  UserPoolId: '',
  ClientId: '',
};
```

To develop:

```bash
$ yarn dev 
```

To build for production:

```bash
$ yarn prod 
```

To Live Edit Code open in browser:

```bash
http://localhost:3000/
```
