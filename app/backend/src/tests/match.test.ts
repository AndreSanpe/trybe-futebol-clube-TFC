import * as sinon from 'sinon';
import * as chai from 'chai';
import user from './mocks/mock.user.db';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import { Model } from 'sequelize';
import Match from '../database/models/Match';

chai.use(chaiHttp);

const { expect } = chai;

const token: String = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY2Njg5NDIyMn0.uyO2dzoUNDwTne74QokuJ7l-dvbTGMxQCYGjBGIgV_c';

interface IaddMatch{
  homeTeam: number; 
  awayTeam: number; 
  homeTeamGoals: number;
  awayTeamGoals: number;
};

const addMatch: IaddMatch = {
  homeTeam: 4, 
  awayTeam: 1, 
  homeTeamGoals: 2,
  awayTeamGoals: 2
};
describe('Testing Match route', () => {

    let chaiHttpResponse: Response;

  // beforeEach(async () => {
  //   sinon
  //     .stub(UserModel, "findOne")
  //     .resolves(
  //       user as User
  //     );
  // });

  // afterEach(()=>{
  //   (UserModel.findOne as sinon.SinonStub).restore();
  // })

  describe('We are testing Match route', () => {
      it('Just to see if it works', async () => {
        chaiHttpResponse = await chai.request(app).get('/matches')        
        expect(chaiHttpResponse.status).to.equal(200);
      });
  
  })
  describe('We are testing Match route', () => {
    it('Just to see if it works whith INPROGRESS FALSE', async () => {
      chaiHttpResponse = await chai.request(app).get('/matches?inProgress=false')        
      expect(chaiHttpResponse.status).to.equal(200);
    });

})
describe('We are testing Match route', () => {
  it('Just to see if it works whith INPROGRESS FALSE', async () => {
    chaiHttpResponse = await chai.request(app).get('/matches?inProgress=true')        
    expect(chaiHttpResponse.status).to.equal(200);
  });
  it('Testing if it is possible get match with an ID', async () => {
    chaiHttpResponse = await chai.request(app).get('/matches/:id')        
    expect(chaiHttpResponse.status).to.equal(404);
  });

  it('Testing if it is possible get match with an ID FINISHED', async () => {
    chaiHttpResponse = await chai.request(app).get('/matches/1/finish')        
    expect(chaiHttpResponse.status).to.equal(404);
  });
})
describe('We are testing Match route', () => {

  it('Throw new error', async () => {
    sinon
    .stub(Match, "findOne")
    .resolves(
      undefined
    );

    chaiHttpResponse = await chai.request(app).get('/matches/4')        
    expect(chaiHttpResponse.status).to.equal(404);

    sinon.restore();
  });

})
// describe('We are testing Match route', () => {

//   it('Add match', async () => {
//     sinon
//     .stub(Match, "create")
//     .resolves(undefined);

//     chaiHttpResponse = await chai.request(app).post('/matches').set(token).send(addMatch);   
//     expect(chaiHttpResponse.status).to.equal(404);

//     sinon.restore();

//   });

// })

});







