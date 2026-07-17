export type ProductCategory =
  | "Interventional Radiology"
  | "Surgery"
  | "VR Simulators"
  | "Vascular Model Library";

export type ProductSpeciality =
  | "Cardiovascular"
  | "Neurovascular"
  | "Peripheral";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  speciality?: ProductSpeciality;
  shortDescription: string;
  description: string;
  image: string;
  specifications: Record<string, string>;
  relatedProductIds: string[];
}