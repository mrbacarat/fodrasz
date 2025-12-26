import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.create({
    data: {
      email: "admin@auroraszalon.hu",
      name: "Admin",
      passwordHash: "admin123",
      role: "ADMIN"
    }
  });

  const staffUser = await prisma.user.create({
    data: {
      email: "lilla@auroraszalon.hu",
      name: "Kovács Lilla",
      passwordHash: "staff123",
      role: "STAFF"
    }
  });

  const staffProfile = await prisma.staffProfile.create({
    data: {
      userId: staffUser.id,
      title: "Senior stylist",
      specialty: "Balayage, színkorrekció",
      bio: "10+ év tapasztalat, természetes árnyalatok specialistája."
    }
  });

  const services = await prisma.service.createMany({
    data: [
      {
        name: "Női hajvágás",
        description: "Frissítés, beszárítás, styling",
        price: 8990,
        durationMinutes: 60,
        bufferMinutes: 10,
        category: "Vágás",
        defaultStaffId: staffProfile.id
      },
      {
        name: "Férfi hajvágás",
        description: "Vágás, mosás, styling",
        price: 5990,
        durationMinutes: 30,
        bufferMinutes: 5,
        category: "Vágás",
        defaultStaffId: staffProfile.id
      }
    ]
  });

  await prisma.setting.create({
    data: {
      brandName: "Aurora Szalon",
      primaryColor: "#c28f5c",
      secondaryColor: "#1c110a",
      fontPreset: "Jakarta",
      buttonStyle: "rounded",
      radius: 18,
      galleryImages: [],
      policies: "Lemondás 24 órával előtte.",
      reminders: "24 órával előtte emlékeztető"
    }
  });

  await prisma.staffProfile.update({
    where: { id: staffProfile.id },
    data: {
      services: {
        connect: await prisma.service.findMany({ select: { id: true } })
      }
    }
  });

  console.log({ admin, services });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
