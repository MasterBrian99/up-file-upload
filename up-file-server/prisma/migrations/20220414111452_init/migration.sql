/*
  Warnings:

  - A unique constraint covering the columns `[unique_url_id]` on the table `FileList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FileList_unique_url_id_key" ON "FileList"("unique_url_id");
