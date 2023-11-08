-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'SUPPORT');

-- CreateEnum
CREATE TYPE "HealthStatus" AS ENUM ('CRITICAL', 'WARNING', 'HEALTY');

-- CreateEnum
CREATE TYPE "Urgency" AS ENUM ('CRITICAL', 'WARNING', 'HEALTY');

-- CreateEnum
CREATE TYPE "SupportType" AS ENUM ('ACTIVE', 'DEPENDENCY');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" "UserType" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actives" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "healthStatus" "HealthStatus" NOT NULL,
    "totalValue" DOUBLE PRECISION NOT NULL,
    "lifeTime" TEXT NOT NULL,

    CONSTRAINT "actives_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dependencies" (
    "id" UUID NOT NULL,
    "activeId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "healthStatus" "HealthStatus" NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "lifeTime" TEXT NOT NULL,

    CONSTRAINT "dependencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "support_calls" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "report" TEXT NOT NULL,
    "urgency" "Urgency" NOT NULL,
    "supportType" "SupportType" NOT NULL,
    "activeId" UUID NOT NULL,
    "dependencyId" UUID NOT NULL,

    CONSTRAINT "support_calls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "dependencies" ADD CONSTRAINT "dependencies_activeId_fkey" FOREIGN KEY ("activeId") REFERENCES "actives"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "support_calls" ADD CONSTRAINT "support_calls_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "support_calls" ADD CONSTRAINT "support_calls_activeId_fkey" FOREIGN KEY ("activeId") REFERENCES "actives"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "support_calls" ADD CONSTRAINT "support_calls_dependencyId_fkey" FOREIGN KEY ("dependencyId") REFERENCES "dependencies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
