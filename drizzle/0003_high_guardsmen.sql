ALTER TABLE "enrollments" ALTER COLUMN "createtedAt" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "enrollments" ALTER COLUMN "createtedAt" SET DEFAULT now();