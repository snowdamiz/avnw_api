'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('photographers', [
      {
        id: 1,
        name: 'Casey',
        bio: `'Hello, my names Casey! I'm from Mcminnville, Oregon. I was born and raised here in the PNW, and have had plenty of time to explore the Northwest. Photography for me personally, is a way to express how I feel, to allow me to explore the west coast, and meet locals along the way.Photography is such a passion for me, and because of this, I decided to start a photography company. Not just any company, but one that strives to exceed every requirement you have, for whatever photoshoot idea you want."`,
        profile_image: 'https://i.ibb.co/yWh3TMg/profile-IMG.jpg',
        insta_username: `dempsey2.o`,
        createdAt: new Date()
      },
      {
        id: 2,
        name: 'Bryan',
        bio: `My name is Bryan loop. I grew up in Portland Oregon. I started doing photography back in 2009 when I was in high school.From there I graduated in 2011 from Benson Polytechnic. I would describe my photography to be clean and creative. I am quick to adapt to lighting. With all that I have learned I will let my work say the rest! I look forward to getting to know you now!”`,
        profile_image: 'https://i.ibb.co/m8pnwk0/profile-IMG.jpg',
        insta_username: 'loopsphotographypdx',
        createdAt: new Date()
      },
      {
        id: 3,
        name: 'Chris',
        bio: `Hey! My name is Chris. I grew up in sunny San Diego and moved up here to the PNW about 4 years ago. Car culture has always been a part of my life.So simply put, I’m a car enthusiast with a camera. Cars aside, photography has been a passion of mine since high school and shows no signs of stopping anytime soon.`,
        profile_image: 'https://i.ibb.co/MDKXbR6/profile-IMG.jpg',
        insta_username: 'chillaxinphoto',
        createdAt: new Date()
      },
      {
        id: 4,
        name: 'Nicole',
        bio: `Hello! My name is Nicole Lenz. I am based out of Vancouver, Washington and I have been shooting since 2015. Photography to me is a lifestyle and not just a hobby.I absolutely love being able to capture who people are, and the beauty a single image can hold.`,
        profile_image: 'https://i.ibb.co/tB3SkW6/profile-IMG.jpg',
        insta_username: 'nlenzphotography',
        createdAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('photographers', null, {});
  }
};
