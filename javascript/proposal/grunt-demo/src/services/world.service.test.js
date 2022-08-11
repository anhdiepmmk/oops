const worldService = require('./world.service');

describe('world.service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should say world', () => {
    jest.spyOn(worldService, 'sayWorld');

    worldService.sayWorld();

    expect(worldService.sayWorld).toHaveBeenCalled();
  });
});