-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "User_password_length_check" CHECK (LENGTH(password) >= 8),
    CONSTRAINT "User_full_name_length_check" CHECK (LENGTH("fullName") >= 5)
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");