import { ICategory } from './category';

const categories: ICategory[] = [
  {
    id: 1,
    name: 'Category 1',
    description: 'descr 1',
  },
  {
    id: 2,
    name: 'Category 2',
    description: 'descr 2',
  },
  {
    id: 3,
    name: 'Category 3',
    description: 'descr 3',
  },
];

export function getCategories(): Promise<ICategory[]> {
  return Promise.resolve(categories);
}

export function getCategoryById(id: number): Promise<ICategory | undefined> {
  const category = categories.find((cat) => cat.id === id);
  return Promise.resolve(category);
}

export function deleteCategory(id: number): Promise<void> {
  const categoryIndex = categories.findIndex((cat) => cat.id === id);
  if (categoryIndex < 0) return Promise.reject(new Error('category not found'));
  categories.splice(categoryIndex, 1);
  return Promise.resolve();
}

// export function createCategory(data: ICategory): Promise<ICategory> {
//   const isExists = categories.findIndex();
// }
