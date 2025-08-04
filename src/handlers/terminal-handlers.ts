import { 
    startProcess, 
    readProcessOutput, 
    interactWithProcess,
    forceTerminate, 
    listSessions 
} from '../tools/improved-process-tools.js';

import { 
    executeCommand,
    readOutput
} from '../tools/execute.js';

import { 
    ExecuteCommandArgsSchema,
    ReadOutputArgsSchema,
    StartProcessArgsSchema,
    ReadProcessOutputArgsSchema,
    InteractWithProcessArgsSchema,
    ForceTerminateArgsSchema,
    ListSessionsArgsSchema
} from '../tools/schemas.js';

import { ServerResult } from '../types.js';

/**
 * Handle start_process command (improved execute_command)
 */
export async function handleStartProcess(args: unknown): Promise<ServerResult> {
    const parsed = StartProcessArgsSchema.parse(args);
    return startProcess(parsed);
}

/**
 * Handle read_process_output command (improved read_output)
 */
export async function handleReadProcessOutput(args: unknown): Promise<ServerResult> {
    const parsed = ReadProcessOutputArgsSchema.parse(args);
    return readProcessOutput(parsed);
}

/**
 * Handle interact_with_process command (improved send_input)
 */
export async function handleInteractWithProcess(args: unknown): Promise<ServerResult> {
    return interactWithProcess(args);
}

/**
 * Handle force_terminate command
 */
export async function handleForceTerminate(args: unknown): Promise<ServerResult> {
    const parsed = ForceTerminateArgsSchema.parse(args);
    return forceTerminate(parsed);
}

/**
 * Handle list_sessions command
 */
export async function handleListSessions(): Promise<ServerResult> {
    return listSessions();
}

/**
 * Handle execute_command command
 */
export async function handleExecuteCommand(args: unknown): Promise<ServerResult> {
    const parsed = ExecuteCommandArgsSchema.parse(args);
    return executeCommand(parsed);
}

/**
 * Handle read_output command
 */
export async function handleReadOutput(args: unknown): Promise<ServerResult> {
    const parsed = ReadOutputArgsSchema.parse(args);
    return readOutput(parsed);
}