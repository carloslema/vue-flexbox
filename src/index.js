import '@/assets/stylus/vue-flexbox.styl';

import * as Col from './components/col';
import * as Grid from './components/grid';
import * as Row from './components/row';
import * as Text from './components/text';

export default {
  Col,
  Grid,
  Row,
  Text,

  install(Vue) {
    Col.install(Vue);
    Grid.install(Vue);
    Row.install(Vue);
    Text.install(Vue);
  },
};

export { Col };
export { Grid };
export { Row };
export { Text };
