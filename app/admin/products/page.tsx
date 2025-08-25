'use client';

import React, { useState, useRef, ChangeEvent, useMemo } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

// Variant interface
interface Variant {
  id: number;
  size: string;
  color: string;
  price: number;
  stock: number;
  sku: string;
}

// Product interface with category and pricing fields
interface Product {
  id: number;
  name: string;
  description: string;
  category: 'LED' | 'Fan' | 'Appliance' | 'Cooler';
  sellPrice: number;
  productValue: number;
  enabled: boolean;
  images: string[];
  variants: Variant[];
}

const categories = ['LED', 'Fan', 'Appliance', 'Cooler'] as const;

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Example Fan',
    description: 'Ceiling fan with remote control',
    category: 'Fan',
    sellPrice: 120,
    productValue: 80,
    enabled: true,
    images: [],
    variants: [
      { id: 1, size: 'Medium', color: 'White', price: 120, stock: 10, sku: 'FAN-M-WHT' }
    ],
  },
  {
    id: 2,
    name: 'LED Panel Light',
    description: 'Energy efficient panel light',
    category: 'LED',
    sellPrice: 45,
    productValue: 30,
    enabled: true,
    images: [],
    variants: [],
  },
  {
    id: 3,
    name: 'Room Cooler',
    description: 'Portable room cooler',
    category: 'Cooler',
    sellPrice: 150,
    productValue: 100,
    enabled: false,
    images: [],
    variants: [],
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [newProductData, setNewProductData] = useState<Product>({
    id: Date.now(),
    name: '',
    description: '',
    category: 'LED',
    sellPrice: 0,
    productValue: 0,
    enabled: true,
    images: [],
    variants: [],
  });

  // Filters state
  const [filter, setFilter] = useState({
    name: '',
    category: '',
    enabled: 'all', // all | true | false
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle filter changes
  const handleFilterChange = (field: 'name'|'category'|'enabled', value: string) => {
    setFilter(f => ({ ...f, [field]: value }));
  };

  // Compute filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (filter.name && !p.name.toLowerCase().includes(filter.name.toLowerCase())) {
        return false;
      }
      if (filter.category && filter.category !== '' && p.category !== filter.category) {
        return false;
      }
      if (filter.enabled !== 'all') {
        if (filter.enabled === 'true' && !p.enabled) return false;
        if (filter.enabled === 'false' && p.enabled) return false;
      }
      return true;
    });
  }, [products, filter]);

  // Update field handler
  const handleInputChange = (field: keyof Product, value: any) => {
    setNewProductData({ ...newProductData, [field]: value });
  };

  // Variant handlers
  const addVariant = () => {
    const newVariant: Variant = {
      id: Date.now(),
      size: '',
      color: '',
      price: 0,
      stock: 0,
      sku: '',
    };
    setNewProductData({
      ...newProductData,
      variants: [...newProductData.variants, newVariant],
    });
  };

  const updateVariant = (id: number, field: keyof Variant, value: any) => {
    setNewProductData({
      ...newProductData,
      variants: newProductData.variants.map((v) =>
        v.id === id ? { ...v, [field]: value } : v
      ),
    });
  };

  const removeVariant = (id: number) => {
    setNewProductData({
      ...newProductData,
      variants: newProductData.variants.filter((v) => v.id !== id),
    });
  };

  // Image upload handler
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const filesArray = Array.from(e.target.files);
    filesArray.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setNewProductData((prev) => ({
            ...prev,
            images: [...prev.images, reader.result as string],
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setNewProductData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  // Save new or edited product
  const saveProduct = () => {
    if (!newProductData.name.trim()) {
      alert('Product name is required.');
      return;
    }

    if (editingProductId) {
      // Update existing product
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProductId ? newProductData : p))
      );
    } else {
      // Add new product
      setProducts((prev) => [...prev, newProductData]);
    }

    setEditingProductId(null);
    setNewProductData({
      id: Date.now(),
      name: '',
      description: '',
      category: 'LED',
      sellPrice: 0,
      productValue: 0,
      enabled: true,
      images: [],
      variants: [],
    });
  };

  // Edit product handler
  const editProduct = (product: Product) => {
    setEditingProductId(product.id);
    setNewProductData(product);
  };

  // Delete product handler
  const deleteProduct = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      if (editingProductId === id) {
        setEditingProductId(null);
        setNewProductData({
          id: Date.now(),
          name: '',
          description: '',
          category: 'LED',
          sellPrice: 0,
          productValue: 0,
          enabled: true,
          images: [],
          variants: [],
        });
      }
    }
  };

  // Enable/disable toggle
  const toggleProductEnabled = (id: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p))
    );
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Products</h1>
      <p className="text-muted-foreground">
        Manage your products including categories, prices, stock, and variants.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <Input
          placeholder="Search by name"
          value={filter.name}
          onChange={(e) => handleFilterChange('name', e.target.value)}
          className="max-w-sm"
        />
        <select
          className="border rounded px-3 py-2"
          value={filter.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          className="border rounded px-3 py-2"
          value={filter.enabled}
          onChange={(e) => handleFilterChange('enabled', e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="true">Enabled</option>
          <option value="false">Disabled</option>
        </select>
      </div>

      {/* Product List Table */}
      <div className="overflow-x-auto max-h-[400px] border rounded-lg bg-card shadow-card">
        <table className="min-w-full border-collapse table-auto text-left text-sm">
          <thead className="bg-secondary text-secondary-foreground sticky top-0">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Sell Price</th>
              <th className="p-3">Product Value</th>
              <th className="p-3">Enabled</th>
              <th className="p-3">Variants</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center p-4 text-muted-foreground">
                  No products found.
                </td>
              </tr>
            ) : (
              filteredProducts.map((prod) => (
                <tr
                  key={prod.id}
                  title={prod.description}
                  className="border-t bg-gray-100"
                >
                  <td className="p-3 font-medium">{prod.name}</td>
                  <td className="p-3">{prod.category}</td>
                  <td className="p-3">${prod.sellPrice.toFixed(2)}</td>
                  <td className="p-3">${prod.productValue.toFixed(2)}</td>
                  <td className="p-3 text-center">
                    <input
                      type="checkbox"
                      checked={prod.enabled}
                      onChange={() => toggleProductEnabled(prod.id)}
                      aria-label={`Enable product ${prod.name}`}
                    />
                  </td>
                  <td className="p-3">
                    {prod.variants.length} variant{prod.variants.length !== 1 ? 's' : ''}
                  </td>
                  <td className="p-3 flex gap-2">
                    <Button size="sm" variant="outline" className='hover:text-blue-600'  onClick={() => editProduct(prod)}>
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive" className='text-gray-800 hover:text-red-500' onClick={() => deleteProduct(prod.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Product Form */}
      <div className="border rounded-lg bg-card p-6 shadow-card max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">
          {editingProductId ? 'Edit Product' : 'Add New Product'}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveProduct();
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Product Name
              </label>
              <Input
                id="name"
                value={newProductData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block mb-1 font-medium">
                Category
              </label>
              <select
                id="category"
                className="w-full border rounded px-3 py-2"
                value={newProductData.category}
                onChange={(e) => handleInputChange('category', e.target.value as Product['category'])}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="sellPrice" className="block mb-1 font-medium">
                Sell Price
              </label>
              <Input
                type="number"
                id="sellPrice"
                value={newProductData.sellPrice}
                onChange={(e) => handleInputChange('sellPrice', parseFloat(e.target.value) || 0)}
                required
                min={0}
                step={0.01}
              />
            </div>

            <div>
              <label htmlFor="productValue" className="block mb-1 font-medium">
                Product Value
              </label>
              <Input
                type="number"
                id="productValue"
                value={newProductData.productValue}
                onChange={(e) => handleInputChange('productValue', parseFloat(e.target.value) || 0)}
                required
                min={0}
                step={0.01}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="description" className="block mb-1 font-medium">
                Description
              </label>
              <textarea
                id="description"
                className="w-full border rounded p-2 min-h-[80px]"
                value={newProductData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>
          </div>

          {/* Images Upload and Preview */}
          <div>
            <label className="block mb-1 font-medium">Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="mb-2"
            />
            <div className="flex space-x-4 overflow-x-auto">
              {newProductData.images.map((img, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={img}
                    alt={`Product Image ${idx + 1}`}
                    className="h-20 w-20 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-0 right-0 rounded-full bg-red-600 text-white p-1 hover:bg-red-700 text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Variants Management */}
          <div>
            <label className="block mb-1 font-medium">Variants</label>
            <Button size="sm" onClick={addVariant} className="mb-3">
              Add Variant
            </Button>
            {newProductData.variants.length === 0 && (
              <p className="text-muted-foreground text-sm">No variants added yet.</p>
            )}
            {newProductData.variants.map((v) => (
              <div
                key={v.id}
                className="flex flex-wrap gap-3 mb-3 items-center border rounded p-3"
              >
                <Input
                  placeholder="Size"
                  value={v.size}
                  onChange={(e) => updateVariant(v.id, 'size', e.target.value)}
                  className="w-24"
                />
                <Input
                  placeholder="Color"
                  value={v.color}
                  onChange={(e) => updateVariant(v.id, 'color', e.target.value)}
                  className="w-24"
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={v.price}
                  onChange={(e) => updateVariant(v.id, 'price', parseFloat(e.target.value) || 0)}
                  className="w-24"
                />
                <Input
                  type="number"
                  placeholder="Stock"
                  value={v.stock}
                  onChange={(e) => updateVariant(v.id, 'stock', parseInt(e.target.value) || 0)}
                  className="w-24"
                />
                <Input
                  placeholder="SKU"
                  value={v.sku}
                  onChange={(e) => updateVariant(v.id, 'sku', e.target.value)}
                  className="w-24"
                />
                <Button size="sm" variant="destructive" onClick={() => removeVariant(v.id)}>
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Button type="submit">{editingProductId ? 'Save Changes' : 'Add Product'}</Button>
            {editingProductId && (
              <Button
                variant="outline"
                onClick={() => {
                  setEditingProductId(null);
                  setNewProductData({
                    id: Date.now(),
                    name: '',
                    description: '',
                    category: 'LED',
                    sellPrice: 0,
                    productValue: 0,
                    enabled: true,
                    images: [],
                    variants: [],
                  });
                }}
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
