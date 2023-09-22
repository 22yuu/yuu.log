import mariadb from 'mariadb';

const CONNECTION_INFO = {
  host: 'localhost',
  user: 'root',
  password: 'wlsdb11@@',
  database: 'myblog',
};

export default class MariaDB {
  #conn;

  constructor() {
    this.#conn = null;
  }

  async initialize() {
    try {
      this.#conn = await mariadb.createPool(CONNECTION_INFO);
    } catch (e) {
      console.error(
        'failed initialization database... please retry...!\n' + '[Errors]:' + e
      );
    }
  }

  async getTestData() {
    await this.initializing;
    try {
      //   console.log(this.#conn);
      const rows = await this.#conn.query('select * from test');
      //   console.log(rows);
      return rows;
    } catch (e) {
      console.error('failed getting datas...\n' + '[Errors]:' + e);
    }
  }
}
