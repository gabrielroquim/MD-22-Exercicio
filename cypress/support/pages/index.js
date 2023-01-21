import  {loginPage}  from './login.page'
import { dashboardPage } from './dashboard.page'
export {loginPage,  dashboardPage }

const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = (on, config) => registerReportPortalPlugin(on, config);