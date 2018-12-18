export class UrlUtil {
  static queryParamsToObject(url: string) {
    if (url && url.includes('?')) {
      const queryParams = this.getQueryParamsArray(this.getQueryConditions(url));

      return queryParams.reduce((accumulator, value, index, array) => {
        if (index % 2 === 0) {
          accumulator[value] = null;
        } else {
          const lastKey = array[index - 1];
          accumulator[lastKey] = value;
        }
        return accumulator;
      }, {});
    }

    return null;
  }

  static queryParamsToString(queryParams: any) {
    let result = '';
    if (queryParams) {
      let paramPrefix = '?';
      for (var property in queryParams) {
        result += `${paramPrefix}${property}=${queryParams[property]}`;
        paramPrefix = '&';
      }
    }

    return result;
  }

  private static getQueryConditions(url: string): string[] {
    return url.substring(url.indexOf('?') + 1, url.length).split('&');
  }

  private static getQueryParamsArray(conditions: string[]) {
    return conditions.reduce((accumulator, value) => {
      return [...accumulator, ...value.split('=')];
    }, []);
  }
}
