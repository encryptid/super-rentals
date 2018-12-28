import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    //v2.18
    // filterByCity(param) {
    //   if (param !== '') {
    //     return this.get('store')
    //     .query('rental', { city: param }).then((results) => {
    //       return { query: param, results: results };
    //     });
    //   } else {
    //     return this.get('store')
    //     .findAll('rental').then((results) => {
    //       return { query: param, results: results };
    //     });
    //   }
    // }
    // v3.x
    filterByCity(param) {
      if (param !== '') {
        return this.store
          .query('rental', { city: param }).then((results) => {
            return { query: param, results: results };
          });
      } else {
        return this.store
          .findAll('rental').then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }
});
