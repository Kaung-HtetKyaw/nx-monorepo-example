import { program } from 'commander';
import config from './core/config'

// run validitiy checks for env variables

runValidityChecks();

program.version(config.version);

program
  .command('migrate')
  .description('Execute data migration')
  .action(() => {
    // implementation for migartions here
    console.log('Migration has been run');
  });

program
  .command('worker')
  .description('Start worker')
  .action(() => {
    const manager = new HealthStatusManager();
    createHealthServer(manager);
    composeCommand(startWorkerCommand(manager));
  });

program
  .command('serve')
  .description('Start web server')
  .action(async () => {
    const manager = new HealthStatusManager();
    createHealthServer(manager);
    composeCommand(
      await startServerCommand(manager),
      await startPrometheusServer()
    );
  });

program
  .command('setupMasterKey')
  .description('Setup master key for MongoDB CSFLE')
  .action(executeSetupMasterKey);

if (process.isCLI) {
  program.parse();
}

export {
  createWebServer,
  startWorker,
  executeDataMigration,
  listPendingMigrations,
};
