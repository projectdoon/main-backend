-- CreateEnum
CREATE TYPE "Category" AS ENUM ('cat1', 'cat2', 'cat3');

-- CreateTable
CREATE TABLE "complains" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "Category" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Imageurl" TEXT NOT NULL,
    "Status" INTEGER NOT NULL,
    "Burst" INTEGER NOT NULL,
    "Lat" DOUBLE PRECISION NOT NULL,
    "Long" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "complains_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "phoneNo" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "Lat" DOUBLE PRECISION NOT NULL,
    "Long" DOUBLE PRECISION NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alerts" (
    "id" SERIAL NOT NULL,
    "alert" TEXT NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "alerts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schemes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "schemes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_phoneNo_key" ON "users"("phoneNo");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "complains" ADD CONSTRAINT "complains_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
