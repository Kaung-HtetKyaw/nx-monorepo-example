import {
  getBoolean,
  getInteger,
  getNumber,
  getString,
  getStringList,
} from './env';

describe('get string from env variables', () => {
  it('should get string_env_value', () => {
    expect(getString('string_env')).toEqual('string_env_value');
  });

  it('should get fallback_value', () => {
    expect(getString('string_empty_env', 'fallback_value')).toEqual(
      'fallback_value'
    );
  });

  it('should get number_env_value', () => {
    expect(getNumber('number_env')).toEqual(3.2);
  });

  it('should get 4.04', () => {
    expect(getNumber('number_empty_env', 4.04)).toEqual(4.04);
  });

  it('should get integer_env_value', () => {
    expect(getInteger('integer_env')).toEqual(3);
  });

  it('should get 404', () => {
    expect(getInteger('integer_empty_env', 404)).toEqual(404);
  });

  it('should get true', () => {
    expect(getBoolean('boolean_env')).toEqual(true);
    expect(getBoolean('boolean_on_env')).toEqual(true);
    expect(getBoolean('boolean_number_env')).toEqual(true);
  });

  it('should get true', () => {
    expect(getBoolean('boolean_empty_env', true)).toEqual(true);
  });

  it('should get [first,second,third]', () => {
    expect(getStringList('string_list_env')).toEqual([
      'first',
      'second',
      'third',
    ]);
  });

  it('should get default [first]', () => {
    expect(getStringList('string_list_empty_env', ['first'])).toEqual([
      'first',
    ]);
  });
});
