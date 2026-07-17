import type { Product } from "../types/product";
import { PRODUCT_CATEGORIES } from "./categories";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";

const specialities: NonNullable<Product["speciality"]>[] = [
  "Cardiovascular",
  "Neurovascular",
  "Peripheral",
];

const productNames = [
  "Vascular Access Trainer",
  "Laparoscopic Surgery Simulator",
  "Endoscopy Training System",
  "Cardiac Catheterization Simulator",
  "Neurovascular Intervention Simulator",
  "Peripheral Vascular Model",
  "Coronary Angiography Trainer",
  "Ultrasound Guided Injection Trainer",
  "Trauma Management Simulator",
  "Emergency Airway Trainer",
  "Suturing Practice Kit",
  "Central Venous Catheter Trainer",
  "Bronchoscopy Simulator",
  "Arthroscopy Training System",
  "Robotic Surgery Simulator",
  "Microsurgery Training Platform",
  "Vascular Anastomosis Trainer",
  "Orthopedic Surgery Simulator",
  "Spinal Injection Trainer",
  "Interventional Radiology Simulator",
];

const shortDescriptions = [
  "Realistic training platform for medical professionals.",
  "Designed for advanced procedural simulation.",
  "High-fidelity simulator for surgical education.",
  "Ideal for hospitals and medical universities.",
  "Enhances hands-on clinical training experience.",
];

const manufacturers = [
  "SurgeonsLab",
  "MedSim Technologies",
  "SurgiTech",
  "ClinicalXR",
  "MediTrain",
];

const images = [img1, img2, img3, img4, img5, img6, img7];

export const generateProducts = (): Product[] => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: `product-${index + 1}`,

    name: `${productNames[index % productNames.length]}`,

    category: PRODUCT_CATEGORIES[index % PRODUCT_CATEGORIES.length],

    speciality: specialities[index % specialities.length],

    shortDescription: shortDescriptions[index % shortDescriptions.length],

    description:
      "This advanced simulator provides realistic hands-on medical training for healthcare professionals, universities, and hospitals.",

    image: images[index % images.length],

    specifications: {
      Manufacturer: manufacturers[index % manufacturers.length],
      Material: "Medical Grade Polymer",
      Warranty: "2 Years",
    },

    relatedProductIds: [],
  }));
};
