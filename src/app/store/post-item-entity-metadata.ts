import { EntityDataModuleConfig, EntityMetadataMap } from "@ngrx/data";
import { PostItem } from "../post-item-details/model/post-item.model";


export const entityMetaData: EntityMetadataMap = {
  PostItem: {
    sortComparer: sortByName,
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  }
}

export function sortByName(a: PostItem, b: PostItem): number {
  const compare = a.title.localeCompare(b.title);

  // if (compare > 0) return -1;

  // if (compare < 0) return 1;

  return compare;
}

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata: entityMetaData
}
