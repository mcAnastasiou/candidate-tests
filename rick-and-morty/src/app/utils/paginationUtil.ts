import { Info } from '../modules/characters/models/info';

export class PagianationUtil {
  static getPaginationInfo(count: number, itemsPerPage: number = 1, curPage: number = 1): Info {
    const info: Info = new Info();
    info.count = count;
    info.pages = this.calculatePages(count, itemsPerPage);
    this.setPagesNavigation(info, itemsPerPage, curPage);

    return info;
  }

  static getPageItems<T>(allItems: T[], itemsPerPage: number = 1, curPage: number = 1): T[] {
    const startIndex = (curPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage <= allItems.length ? startIndex + itemsPerPage : allItems.length;
    return allItems.slice(startIndex, endIndex);
  }

  static getPageItemIndex(itemsPerPage: number = 1, curPage: number = 1, index: number = 1): number {
    return (curPage - 1) * itemsPerPage + index + 1;
  }

  private static setPagesNavigation(info: Info, itemsPerPage: number = 1, curPage: number = 1) {
    info.next = this.calculateNextPage(info.count, itemsPerPage, curPage);
    info.prev = this.calculatePrevPage(curPage);
  }

  private static calculatePages(count: number, itemsPerPage: number): number {
    return Math.ceil(count / itemsPerPage);
  }

  private static calculateNextPage(count: number, itemsPerPage: number = 1, curPage: number = 1): string{
    if (curPage * itemsPerPage < count) {
      return (curPage + 1).toString();
    } else {
      return '';
    }
  }

  private static calculatePrevPage(curPage: number = 1): string {
    return curPage === 1 ? '' : (curPage - 1).toString();
  }
}
