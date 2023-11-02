-- CreateTable
CREATE TABLE "Unicorn" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "album" VARCHAR(255),
    "artist" VARCHAR(255) NOT NULL,
    "songNumber" INTEGER NOT NULL,

    CONSTRAINT "Unicorn_pkey" PRIMARY KEY ("id")
);
