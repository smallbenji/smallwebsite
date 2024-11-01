import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
	id: serial("id").primaryKey(),
	fullName: text("full_name"),
	phone: varchar("phone", { length: 256 }),
});

export const projectsTable = pgTable("projects", {
	id: serial("id").primaryKey(),
	projectName: text("project_name"),
	projectDescription: text("project_description"),
	projectImageUrl: text("project_image_url"),
	projectLink: text("project_link"),
	sourceLink: text("source_link"),
});
