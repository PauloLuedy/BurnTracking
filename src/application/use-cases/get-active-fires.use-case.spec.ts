import { FireRepository } from 'src/domain/repositories/fire.repository';
import { GetActiveFiresUseCase } from './get-active-fires.use-case';
import { Fire } from 'src/domain/entities/fire.entity';

describe('GetActiveFiresUseCase', () => {
  let useCase: GetActiveFiresUseCase;
  let fireRepository: FireRepository;
  let mockGetActiveFires: jest.Mock;

  beforeEach(() => {
    mockGetActiveFires = jest.fn();
    fireRepository = {
      getActiveFires: mockGetActiveFires,
    } as jest.Mocked<FireRepository>;

    useCase = new GetActiveFiresUseCase(fireRepository);
  });

  it('should return active fires', async () => {
    const activeFires: Fire[] = [
      {
        id: '1',
        latitude: -15.123,
        longitude: -47.456,
        confidence: 85,
        brightness: 320.5,
        detectedAt: new Date(),
        isActive: true,
      },
      {
        id: '2',
        latitude: -16.789,
        longitude: -48.012,
        confidence: 92,
        brightness: 315.2,
        detectedAt: new Date(),
        isActive: true,
      },
    ];
    (fireRepository.getActiveFires as jest.Mock).mockResolvedValue(activeFires);

    const result = await useCase.execute();

    expect(result).toEqual(activeFires);
    expect(mockGetActiveFires).toHaveBeenCalledTimes(1);
  });
});
