-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "projectName" TEXT NOT NULL,
    "departmentName" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "addressLineOne" TEXT,
    "addressLineTwo" TEXT,
    "district" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "authorityName" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "uploadedBy" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
