-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "propertyName" TEXT NOT NULL,
    "propertyLocation" TEXT NOT NULL,
    "propertyAvailability" TEXT NOT NULL,
    "dailyPrice" TEXT NOT NULL,
    "hourlyPrice" TEXT NOT NULL,
    "dailyBookingLimit" TEXT,
    "hourlyBookingLimit" TEXT,
    "resourcesAvailable" TEXT[],
    "careTakerContact" INTEGER[],
    "rules" TEXT NOT NULL,
    "documentName" TEXT[],
    "images" TEXT[],
    "authorityName" TEXT NOT NULL,
    "uploadedBy" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);
