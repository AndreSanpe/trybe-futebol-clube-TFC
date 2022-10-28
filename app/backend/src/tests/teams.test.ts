import * as sinon from 'sinon';
import * as chai from 'chai';
import user from './mocks/mock.user.db';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
// import UserModel from '../database/models/User';

import { Response } from 'superagent';
import {Model} from 'sequelize';
// import User from '../database/models/User';
// import { IUser } from '../interfaces/IUser';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing Team route', () => {

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
  describe('We are testing Teams route', () => {
      it('Just to see if it works', async () => {
        chaiHttpResponse = await chai.request(app).get('/teams')        
        expect(chaiHttpResponse.status).to.equal(200);
      });
  
  })

  describe('We are testing Teams route', () => {
    it('Just to see if we can get an id', async () => {
      chaiHttpResponse = await chai.request(app).get('/teams/4')        
      expect(chaiHttpResponse.status).to.equal(200);
    });

})
  describe('We are testing Teams route', () => {
    it('Throw new error', async () => {
      chaiHttpResponse = await chai.request(app).get('/teams/49999')        
      expect(chaiHttpResponse.status).to.equal(401);
    });
    it('Throw new error', async () => {
      sinon.restore();

      sinon
      .stub(Model, "findOne")
      .resolves(
        null
      );

      chaiHttpResponse = await chai.request(app).get('/teams/49999')        
      expect(chaiHttpResponse.status).to.equal(401);

      sinon.restore();
    });
   
})

});







