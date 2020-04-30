/* eslint-disable import/no-extraneous-dependencies */
// Setup file for jest runs after
// jest has been initialized
// but before tests start
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const { document } = new JSDOM(
  '<!doctype html><html><body></body></html>'
).window;
global.document = document;
global.window = document.defaultView;

configure({ adapter: new Adapter() });
