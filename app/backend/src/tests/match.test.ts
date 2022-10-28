import * as sinon from 'sinon';
import * as chai from 'chai';
import user from './mocks/mock.user.db';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
// import UserModel from '../database/models/User';

import { Response } from 'superagent';
import { Model } from 'sequelize';
// import User from '../database/models/User';
// import { IUser } from '../interfaces/IUser';

chai.use(chaiHttp);

const { expect } = chai;

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
// describe('We are testing Match route', () => {

  // it('Throw new error', async () => {
  //   sinon
  //   .stub(Model, "findOne")
  //   .resolves(
  //     undefined
  //   );

  //   chaiHttpResponse = await chai.request(app).get('/matches/4')        
  //   expect(chaiHttpResponse.status).to.equal(200);

  //   sinon.restore();
  // });

// })

});







