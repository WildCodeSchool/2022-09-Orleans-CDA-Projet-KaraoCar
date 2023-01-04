import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTrip1672835405259 implements MigrationInterface {
  name = 'CreateTrip1672835405259';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`trip_slice\` (\`id\` int NOT NULL AUTO_INCREMENT, \`startingPoint\` varchar(255) NOT NULL, \`startingPointLat\` int NOT NULL DEFAULT '0', \`startingPointLng\` int NOT NULL DEFAULT '0', \`endingPoint\` varchar(255) NOT NULL, \`endingPointLat\` int NOT NULL DEFAULT '0', \`endingPointLng\` int NOT NULL DEFAULT '0', \`startingDateTime\` datetime NOT NULL, \`endingDateTime\` datetime NOT NULL, \`totalSeat\` int NOT NULL, \`price\` int NOT NULL, \`itineraryUrl\` text NOT NULL, \`hasTolls\` tinyint NOT NULL, \`tripId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`trip\` (\`id\` int NOT NULL AUTO_INCREMENT, \`carId\` int NOT NULL, \`middleseat\` tinyint NOT NULL, \`comment\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`musical_style\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`trip_musical_style\` (\`tripId\` int NOT NULL, \`musicalStyleId\` int NOT NULL, INDEX \`IDX_70fb4dc65147fc65d7267af498\` (\`tripId\`), INDEX \`IDX_23a6a6da2f78fb7cc65011c3bc\` (\`musicalStyleId\`), PRIMARY KEY (\`tripId\`, \`musicalStyleId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`trip_slice\` ADD CONSTRAINT \`FK_fb0ca9f0b946892a1979598f1c5\` FOREIGN KEY (\`tripId\`) REFERENCES \`trip\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`trip_musical_style\` ADD CONSTRAINT \`FK_70fb4dc65147fc65d7267af4986\` FOREIGN KEY (\`tripId\`) REFERENCES \`trip\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`trip_musical_style\` ADD CONSTRAINT \`FK_23a6a6da2f78fb7cc65011c3bc6\` FOREIGN KEY (\`musicalStyleId\`) REFERENCES \`musical_style\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `INSERT INTO \`musical_style\` (\`id\`, \`name\`) VALUES (1, 'Rock'), (2, 'Rap'), (3, 'R&B'), (4, 'Pop'), (5, 'Jazz'), (6, 'Classical'), (7, 'Metal'), (8, 'Techno'), (9, 'Folk')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`trip_musical_style\` DROP FOREIGN KEY \`FK_23a6a6da2f78fb7cc65011c3bc6\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`trip_musical_style\` DROP FOREIGN KEY \`FK_70fb4dc65147fc65d7267af4986\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`trip_slice\` DROP FOREIGN KEY \`FK_fb0ca9f0b946892a1979598f1c5\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_23a6a6da2f78fb7cc65011c3bc\` ON \`trip_musical_style\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_70fb4dc65147fc65d7267af498\` ON \`trip_musical_style\``,
    );
    await queryRunner.query(`DROP TABLE \`trip_musical_style\``);
    await queryRunner.query(`DROP TABLE \`musical_style\``);
    await queryRunner.query(`DROP TABLE \`trip\``);
    await queryRunner.query(`DROP TABLE \`trip_slice\``);
  }
}
