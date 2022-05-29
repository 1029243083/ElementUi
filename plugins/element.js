import { createApp } from 'vue';
import Element from '@element';
import App from '../src/App.vue';
import '../src/assets/theme-chalk/display.scss';
import '../src/assets/theme-chalk/index.scss';

const app = createApp(App);
app.use(Element);

export default app;
