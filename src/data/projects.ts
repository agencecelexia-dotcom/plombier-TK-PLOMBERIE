export interface AdminProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  year: number;
  featuredImage: string;
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

export const projects: AdminProject[] = [
  {
    id: "sdb-gagny",
    slug: "renovation-sdb-gagny",
    title: "Rénovation salle de bain complète",
    category: "Salle de bain",
    shortDescription: "Transformation d'une salle de bain années 80 en espace moderne avec douche italienne.",
    fullDescription: "Transformation d'une salle de bain années 80 en espace moderne avec douche italienne, meuble vasque et miroir LED.",
    location: "Gagny",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "cuisine-livry",
    slug: "refection-plomberie-cuisine-livry",
    title: "Réfection plomberie cuisine",
    category: "Plomberie",
    shortDescription: "Remplacement complet de la tuyauterie et installation d'un évier encastré.",
    fullDescription: "Remplacement complet de la tuyauterie et installation d'un évier encastré avec robinet col de cygne.",
    location: "Livry-Gargan",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "chauffe-eau-aulnay",
    slug: "remplacement-chauffe-eau-aulnay",
    title: "Remplacement chauffe-eau",
    category: "Chauffe-eau",
    shortDescription: "Remplacement d'un vieux chauffe-eau par un ballon thermodynamique classe A.",
    fullDescription: "Remplacement d'un vieux chauffe-eau rouillé par un ballon thermodynamique classe A.",
    location: "Aulnay-sous-Bois",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "pac-neuilly",
    slug: "installation-pac-neuilly",
    title: "Installation pompe à chaleur",
    category: "Chauffage",
    shortDescription: "Remplacement d'une vieille chaudière fioul par une pompe à chaleur air-eau.",
    fullDescription: "Remplacement d'une vieille chaudière fioul par une pompe à chaleur air-eau compacte.",
    location: "Neuilly-sur-Marne",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "sdb-pmr-le-raincy",
    slug: "salle-de-bain-pmr-le-raincy",
    title: "Salle de bain PMR",
    category: "Salle de bain",
    shortDescription: "Adaptation d'une salle de bain pour personne à mobilité réduite.",
    fullDescription: "Adaptation d'une salle de bain pour personne à mobilité réduite avec douche plain-pied et barres d'appui.",
    location: "Le Raincy",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "chaudiere-montfermeil",
    slug: "remplacement-chaudiere-montfermeil",
    title: "Remplacement chaudière gaz",
    category: "Chauffage",
    shortDescription: "Installation d'une chaudière gaz à condensation dernière génération.",
    fullDescription: "Installation d'une chaudière gaz à condensation dernière génération en remplacement d'un modèle de 20 ans.",
    location: "Montfermeil",
    year: 2023,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
];
