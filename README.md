<p align="center">
  <a href="https://www.obitec.com.br/" target="_blank">
    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEF_yY60ZuXMw/company-logo_100_100/0/1612555454150?e=1659571200&v=beta&t=J5EkLoozUME9lupU-MSfXHSWOqAfVnNrd320Xa9BPLM"/>
  </a>
</p>

<a name="description"></a>

# Express Common Libs
<p align="center">🚀 A simple library to implement standard libs that are used by express APIs</p>


<a name="content"></a>

###  🏁 Content
<!--ts-->
   * [Install](#install)
   * [Usage](#usage)
   * [Status](#status)
<!--te-->

<br>
<a name="install"></a>

# Install
```bash
npm install @obi-tec/express-common-libs
```
See all tags clicking <a href="https://github.com/obi-tec/express-common-libs/tags"> here</a>.

<a name="usage"></a>

# Usage
#### Axios Library
Implementation of axios library to log all sent requests and their respective duration.

```javascript
const { axios } = require('@obi-tec/express-common-libs');

const options = {};
await axios.default.get(url, options);
```
#### Node-Cache Library
Implementation of node-cache library to create a helper function to get and set.

```javascript
const { cache } = require('@obi-tec/express-common-libs');
const key = 'cache-key';
cosnt ttl = 300; // 5 minutes

cache.set(key, 'value', ttl);
cache.get(key);
```

<br>
<a name="status"></a>

# Status
<h4 align="center">
	🚧  Open for contribuitions...   🚧
</h4>