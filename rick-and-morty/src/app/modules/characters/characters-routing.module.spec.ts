import { CharactersRoutingModule } from './characters-routing.module';

describe('CharactersRoutingModule', () => {
  let charactersRoutingModule: CharactersRoutingModule;

  beforeEach(() => {
    charactersRoutingModule = new CharactersRoutingModule();
  });

  it('should create an instance', () => {
    expect(charactersRoutingModule).toBeTruthy();
  });
});
