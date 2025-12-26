import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.create({
    data: {
      email: "admin@lumine.hu",
      name: "Admin",
      passwordHash: "password",
      role: "ADMIN"
    }
  });

  const staff = await prisma.user.create({
    data: {
      email: "staff@lumine.hu",
      name: "Tóth Eszter",
      passwordHash: "password",
      role: "STAFF",
      staffProfile: {
        create: {
          bio: "Női vágások specialistája.",
          specialties: ["Vágás", "Formázás"]
        }
      }
    },
    include: { staffProfile: true }
  });

  const service = await prisma.service.create({
    data: {
      name: "Női vágás + szárítás",
      description: "Személyre szabott vágás és styling.",
      priceHuf: 9990,
      durationMinutes: 60,
      bufferMinutes: 10,
      category: "Vágás",
      addons: {
        create: [{ name: "Fejbőrmasszázs", priceHuf: 2490 }]
      }
    }
  });

  await prisma.staffProfile.update({
    where: { id: staff.staffProfile?.id },
    data: { services: { connect: { id: service.id } } }
  });

  await prisma.customer.create({
    data: {
      name: "Kiss Anna",
      email: "anna@example.com",
      phone: "+36301234567"
    }
  });

  await prisma.setting.create({
    data: {
      key: "branding",
      value: {
        logo: "/logo.svg",
        primaryColor: "#7a39ff",
        secondaryColor: "#2f0f74",
        fontPreset: "playfair",
        buttonStyle: "rounded-xl",
        borderRadius: "1.5rem"
      }
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
