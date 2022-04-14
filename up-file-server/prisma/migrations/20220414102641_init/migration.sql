-- CreateTable
CREATE TABLE "FileList" (
    "id" SERIAL NOT NULL,
    "filename" VARCHAR(255) NOT NULL,
    "file_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unique_url_id" TEXT NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FileList_pkey" PRIMARY KEY ("id")
);
