'use client';

import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';

interface ProductSubCategory {
  name: string;
  url: string;
  brands: string[];
}

interface Category {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  products: ProductSubCategory[];
}

const initialBrands = [
  'ElectroMax',
  'GigaTech',
  'PowerPlus',
  'BrightElectronics',
  'Voltify',
  'AmperePro',
];

const initialCategories: Category[] = [
  {
    id: 'led-lights',
    name: 'LED Lights',
    image: '/assets/Led_Lights_Menu.jpg',
    bgColor: 'bg-amber-50',
    products: [
      {
        name: 'Panel Light',
        url: '/products/led-lights/panel-light',
        brands: ['ElectroMax', 'GigaTech'],
      },
      {
        name: 'Down Light',
        url: '/products/led-lights/down-light',
        brands: [],
      },
      {
        name: 'LED Lamp',
        url: '/products/led-lights/led-lamp',
        brands: [],
      },
    ],
  },
  {
    id: 'fans',
    name: 'Fans',
    image: '/assets/Fans_Menu.JPG',
    bgColor: 'bg-orange-50',
    products: [
      {
        name: 'Ceiling Fan',
        url: '/products/fans/ceiling-fan',
        brands: ['PowerPlus'],
      },
      {
        name: 'Table Fan',
        url: '/products/fans/table-fan',
        brands: ['BrightElectronics'],
      },
    ],
  },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState(initialCategories);
  const [brands] = useState(initialBrands);

  const [newCategoryName, setNewCategoryName] = React.useState('');
  const [newCategoryImage, setNewCategoryImage] = React.useState('');
  const [newCategoryBgColor, setNewCategoryBgColor] =
    React.useState('bg-amber-50');

  const [newSubCategories, setNewSubCategories] = React.useState<
    Record<string, string>
  >({});

  // ✅ Add Category
  const addCategory = () => {
    if (!newCategoryName.trim()) {
      alert('Category name is required');
      return;
    }
    const newCatId = newCategoryName.toLowerCase().replace(/ /g, '-');
    if (categories.find((c) => c.id === newCatId)) {
      alert('Category with this ID already exists');
      return;
    }
    const newCategory: Category = {
      id: newCatId,
      name: newCategoryName,
      image: newCategoryImage,
      bgColor: newCategoryBgColor,
      products: [],
    };
    setCategories([...categories, newCategory]);
    setNewCategoryName('');
    setNewCategoryImage('');
    setNewCategoryBgColor('bg-amber-50');
  };

  // ✅ Delete Category
  const deleteCategory = (id: string) => {
    if (confirm('Delete this category and all its subcategories?')) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  // ✅ Add Subcategory
  const addSubCategory = (categoryId: string) => {
    const newSub = newSubCategories[categoryId]?.trim();
    if (!newSub) {
      alert('Subcategory name required');
      return;
    }
    setCategories(
      categories.map((c) => {
        if (c.id === categoryId) {
          if (
            c.products.some(
              (p) => p.name.toLowerCase() === newSub.toLowerCase(),
            )
          ) {
            alert('Subcategory already exists');
            return c;
          }
          return {
            ...c,
            products: [...c.products, { name: newSub, url: '', brands: [] }],
          };
        }
        return c;
      }),
    );
    setNewSubCategories({ ...newSubCategories, [categoryId]: '' });
  };

  // ✅ Delete Subcategory
  const deleteSubCategory = (categoryId: string, subName: string) => {
    if (confirm('Delete this subcategory?')) {
      setCategories(
        categories.map((c) => {
          if (c.id === categoryId) {
            return {
              ...c,
              products: c.products.filter((p) => p.name !== subName),
            };
          }
          return c;
        }),
      );
    }
  };

  // ✅ Toggle Brand Assignment
  const toggleBrandForSubCategory = (
    categoryId: string,
    subName: string,
    brand: string,
  ) => {
    setCategories(
      categories.map((c) => {
        if (c.id === categoryId) {
          return {
            ...c,
            products: c.products.map((p) => {
              if (p.name === subName) {
                const newBrands = p.brands.includes(brand)
                  ? p.brands.filter((b) => b !== brand)
                  : [...p.brands, brand];
                return { ...p, brands: newBrands };
              }
              return p;
            }),
          };
        }
        return c;
      }),
    );
  };

  return (
    <div className=" space-y-10">
      <h1 className="text-3xl font-bold mb-6">Category & Brand Management</h1>

      {/* Add Category Form */}
      <div className="border p-6 rounded shadow-sm bg-white max-w-4xl mb-10">
        <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-4">
          <Input
            placeholder="Category Name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <Input
            placeholder="Image URL"
            value={newCategoryImage}
            onChange={(e) => setNewCategoryImage(e.target.value)}
          />
          <select
            className="border rounded p-2"
            value={newCategoryBgColor}
            onChange={(e) => setNewCategoryBgColor(e.target.value)}
          >
            <option value="bg-amber-50">Amber</option>
            <option value="bg-orange-50">Orange</option>
            <option value="bg-red-50">Red</option>
            <option value="bg-slate-50">Slate</option>
          </select>
        </div>
        <Button onClick={addCategory}>Add Category</Button>
      </div>

      {/* Categories List */}
      <div className="space-y-10">
        {categories.map((cat) => (
          <div key={cat.id} className="border rounded p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-12 rounded overflow-hidden ${cat.bgColor}`}
                >
                  {cat.image && (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <h3 className="text-2xl font-semibold">{cat.name}</h3>
              </div>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm"
                onClick={() => deleteCategory(cat.id)}
              >
                Delete Category
              </Button>
            </div>

            {/* Add Subcategory */}
            <div className="flex space-x-4 mb-6">
              <Input
                placeholder={`Add subcategory for ${cat.name}`}
                value={newSubCategories[cat.id] || ''}
                onChange={(e) =>
                  setNewSubCategories({
                    ...newSubCategories,
                    [cat.id]: e.target.value,
                  })
                }
              />
              <Button onClick={() => addSubCategory(cat.id)}>
                Add Subcategory
              </Button>
            </div>

            {/* Subcategories List */}
            {cat.products.length === 0 && (
              <p className="text-muted">No subcategories added.</p>
            )}
            <div className="grid sm:grid-cols-2 gap-6">
              {cat.products.map((sub) => (
                <div key={sub.name} className="border rounded p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold">{sub.name}</h4>
                    <Button
                      size="sm"
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm"
                      onClick={() => deleteSubCategory(cat.id, sub.name)}
                    >
                      Delete
                    </Button>
                  </div>

                  {/* Brands Assignment */}
                  {/* <div>
                    <div className="text-sm font-medium mb-2">Assign Brands:</div>
                    <div className="flex flex-wrap gap-2">
                      {brands.map((brand) => (
                        <label
                          key={brand}
                          className="inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Checkbox
                            checked={sub.brands.includes(brand)}
                            onCheckedChange={() =>
                              toggleBrandForSubCategory(cat.id, sub.name, brand)
                            }
                          />
                          <span>{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
