import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface Experience {
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  minor?: string;
  certificate?: string;
  coursework: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  heroColor: string;
  heroGradient: string;
  overview: string;
  problem: string;
  solution: string;
  impact: string[];
  techStack: string[];
  keyFeatures: string[];
  userQuotes?: string[];
  metrics?: { label: string; value: string }[];
  presentationUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  bio: string;
  education: Education;
  experiences: Experience[];
  caseStudies: CaseStudy[];
  skills: Skill[];
  honors: string[];
  interests: string[];
}
