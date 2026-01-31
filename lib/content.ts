/**
 * Content management layer
 * This module provides a clean interface for accessing content
 * Currently uses local JSON files, but designed to be easily replaced
 * with a headless CMS in the future
 */

// Types for content structure
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
}

/**
 * Content loader functions
 * These functions abstract the data source, making it easy to swap
 * local files for a CMS API in the future
 */

// Load services data
export async function getServices(): Promise<Service[]> {
  // In the future, this could fetch from a CMS API
  const services = await import("@/data/services.json");
  return services.default;
}

// Load testimonials data
export async function getTestimonials(): Promise<Testimonial[]> {
  const testimonials = await import("@/data/testimonials.json");
  return testimonials.default;
}

// Load company info
export async function getCompanyInfo(): Promise<CompanyInfo> {
  const companyInfo = await import("@/data/company.json");
  return companyInfo.default;
}

// Load team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  const team = await import("@/data/team.json");
  return team.default;
}
