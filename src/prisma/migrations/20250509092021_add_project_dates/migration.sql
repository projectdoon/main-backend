-- CreateTable
CREATE TABLE "ProjectDate" (
    "id" SERIAL NOT NULL,
    "dateDescription" TEXT NOT NULL,
    "dateName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "projectID" INTEGER NOT NULL,

    CONSTRAINT "ProjectDate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectDate" ADD CONSTRAINT "ProjectDate_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
