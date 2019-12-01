declare const localVue: import ('vue').VueConstructor<import ('vue').default>;
declare namespace NodeJS {
  interface Global {
    window: any;
    localVue: import ('vue').VueConstructor<import ('vue').default>;
  }
}
